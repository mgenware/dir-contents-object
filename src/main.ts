import * as mfs from 'm-fs';
import * as np from 'path';

export default async function getObject(
  dir: string,
): Promise<Record<string, unknown>> {
  const paths = await mfs.subPathsWithType(dir);
  const obj: Record<string, unknown> = {};
  await Promise.all(
    paths.map(async (info) => {
      const name = info.path;
      const fullPath = np.join(dir, name);
      if (info.isFile) {
        obj[name] = await mfs.readTextFileAsync(fullPath);
      } else {
        obj[name] = await getObject(fullPath);
      }
    }),
  );
  return obj;
}
