export function getTopicFromSlug(
    slug: string,
): string | undefined {
    const segments = slug.split('/')
    return segments[1] ?? undefined;
}