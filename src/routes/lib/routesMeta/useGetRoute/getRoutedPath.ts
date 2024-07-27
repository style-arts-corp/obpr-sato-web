export const getRoutedPath = (
  path: string,
  params: Record<string, string | undefined>,
): string => {
  let parsedPath = path;
  Object.entries(params).forEach(([paramName, paramValue]) => {
    if (paramValue === undefined) return;
    parsedPath = parsedPath.replace(paramValue, `:${paramName}`);
  });

  return parsedPath;
};
