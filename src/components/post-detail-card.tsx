import Image from "next/image";
import { Calendar, Eye, ImageOff, Star, User } from "lucide-react";

import { Badge } from "../../@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Separator } from "../../@/components/ui/separator";

export type PostStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED";

export interface PostDetail {
  id: string;
  thumnail: string | null; // keeping your field spelling; rename if you fix it in the API
  title: string;
  isFeatured: boolean;
  tags: string[];
  status: PostStatus;
  views: number;
  // Optional extras — safe to omit if your API doesn't return them yet
  content?: string | null;
  author?: string | null;
  createdAt?: string | null; // ISO date string
}

const statusStyles: Record<PostStatus, string> = {
  DRAFT: "bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-300",
  PUBLISHED:
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-300",
  ARCHIVED: "bg-muted text-muted-foreground",
};

function formatDate(dateString?: string | null) {
  if (!dateString) return null;
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function PostDetailCard({ post }: { post: PostDetail }) {
  const {
    thumnail,
    title,
    isFeatured,
    tags,
    status,
    views,
    content,
    author,
    createdAt,
  } = post;

  const formattedDate = formatDate(createdAt);

  return (
    <Card className="mx-auto w-full max-w-3xl overflow-hidden">
      {/* Thumbnail */}
      <div className="relative aspect-[16/7] w-full bg-muted">
        {thumnail ? (
          <Image
            src={thumnail}
            alt={title}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
            priority
          />
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground">
            <ImageOff className="size-10" aria-hidden />
            <span className="sr-only">No thumbnail</span>
          </div>
        )}

        {isFeatured && (
          <Badge className="absolute left-4 top-4 gap-1">
            <Star className="size-3 fill-current" aria-hidden />
            Featured
          </Badge>
        )}
      </div>

      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-2xl leading-snug">{title}</CardTitle>
          {/* <Badge variant="secondary" className={statusStyles[status]}>
            {status.charAt(0) + status.slice(1).toLowerCase()}
          </Badge> */}
        </div>

        {/* Meta row: author, date, views */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
          {author && (
            <span className="flex items-center gap-1.5">
              <User className="size-4" aria-hidden />
              {author}
            </span>
          )}
          {formattedDate && (
            <span className="flex items-center gap-1.5">
              <Calendar className="size-4" aria-hidden />
              {formattedDate}
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Eye className="size-4" aria-hidden />
            {/* {views.toLocaleString()} {views === 1 ? "view" : "views"} */}
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {tags && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline">
                #{tag}
              </Badge>
            ))}
          </div>
        )}

        {content && (
          <>
            <Separator />
            <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap text-foreground">
              {content}
            </div>
          </>
        )}
      </CardContent>

      <CardFooter className="text-xs text-muted-foreground">
        Post ID: {post.id}
      </CardFooter>
    </Card>
  );
}

/* Usage in src/app/Posts/[id]/page.tsx:
 *
 * import { PostDetailCard } from "@/components/post-detail-card";
 *
 * export default async function PostDetailPage({
 *   params,
 * }: {
 *   params: Promise<{ id: string }>;
 * }) {
 *   const { id } = await params;
 *   const res = await fetch(`http://localhost:3000/api/posts/${id}`, { cache: "no-store" });
 *   const post = await res.json();
 *
 *   return (
 *     <main className="container mx-auto px-4 py-8">
 *       <PostDetailCard post={post} />
 *     </main>
 *   );
 * }
 */
