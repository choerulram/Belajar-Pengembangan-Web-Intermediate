function extractPathnameSegments(pathname) {
  const splitPath = pathname.split('/');

  return {
    resource: splitPath[1] || null,
    id: splitPath[2] || null,
  };
}

function parsePathnameSegments(pathname) {
  const splitPath = pathname.split('/');

  return {
    resource: splitPath[1] || null,
    id: splitPath[2] || null,
  };
}

function constructRouteFromSegments(pathSegments) {
  let pathname = '';

  if (pathSegments.resource) {
    pathname = pathname.concat(`/${pathSegments.resource}`);
  }

  if (pathSegments.id) {
    pathname = pathname.concat('/:id');
  }

  return pathname || '/';
}

function getActivePathname() {
  return location.hash.replace('#', '') || '/';
}

export function getActiveRoute() {
  const pathname = getActivePathname();
  const pathSegments = parsePathnameSegments(pathname);
 
  return constructRouteFromSegments(pathSegments);
}
 
export function parseActivePathname() {
  const pathname = getActivePathname();
  return extractPathnameSegments(pathname);
}
