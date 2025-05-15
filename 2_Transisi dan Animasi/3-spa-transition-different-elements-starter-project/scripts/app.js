import {
  getActivePathname,
  getActiveRoute,
  getRoute,
  parseActivePathname,
  parsePathname,
} from './routes/url-parser.js';
import routes from './routes/routes.js';

export default class App {
  #content;
  #currentPath;

  constructor({ content }) {
    this.#content = content;
    this.#currentPath = getActivePathname();
  }

  async renderPage() {
    const routeName = getActiveRoute();
    const route = routes[routeName];

    // Get page instance
    const page = route();

    // Alternatif update DOM bagi browser yang tidak mendukung transition
    if (!document.startViewTransition) {
      this.#content.innerHTML = await page.render();
      await page.afterRender();

      return;
    }

    const navigationType = this.#getNavigationType();
    let targetThumbnail = null;
 
    if (navigationType === 'list-to-detail') {
      const parsedPathname = parseActivePathname();
      targetThumbnail = document.querySelector(
        `.cats-item[data-catid="${parsedPathname.id}"] .cats-item__image`,
      );
 
      if (targetThumbnail) {
        targetThumbnail.style.viewTransitionName = 'cat-image';
      }
    }

    // Update DOM with view transition
    const transition = document.startViewTransition(async () => {
      this.#content.innerHTML = await page.render();
      await page.afterRender();
 
      if (navigationType === 'detail-to-list') {
        const parsedPathname = parsePathname(this.#currentPath);
        targetThumbnail = document.querySelector(
          `.cats-item[data-catid="${parsedPathname.id}"] .cats-item__image`,
        );
   
        if (targetThumbnail) {
          targetThumbnail.style.viewTransitionName = 'cat-image';
        }
      }
    });

    transition.updateCallbackDone.then(() => {
      console.log('callback function telah dieksekusi.');
    });
    transition.ready.then(() => {
      console.log('View transition siap dijalankan.');
    });
    transition.finished.then(() => {
      console.log('View transition telah selesai.');

      // Clear the temporary view-transition-name
      if (targetThumbnail) {
        targetThumbnail.style.viewTransitionName = '';
      }

      // Update current path
      this.#currentPath = getActivePathname();
    });
  }

  #getNavigationType() {
    const fromRoute = getRoute(this.#currentPath);
    const toRoute = getActiveRoute();
 
    const catListPath = ['/'];
    const catDetailPath = ['/cat/:id'];
 
    if (catListPath.includes(fromRoute) && catDetailPath.includes(toRoute)) {
      return 'list-to-detail';
    }
 
    if (catDetailPath.includes(fromRoute) && catListPath.includes(toRoute)) {
      return 'detail-to-list';
    }
 
    return null;
  }
}
