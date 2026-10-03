import Image from "next/image";
import Link from "next/link";
import { Eye, ImageOff, Star } from "lucide-react";

import { Badge } from "../../@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export type PostStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED";

export interface Post {
  id: string;
  thumnail: string | null; // your field spelling; rename to `thumbnail` if you fix it in the API
  title: string;
  isFeatured: boolean;
  tags: string[];
  status: PostStatus;
  views: number;
}

const statusStyles: Record<PostStatus, string> = {
  DRAFT: "bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-300",
  PUBLISHED:
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-300",
  ARCHIVED: "bg-muted text-muted-foreground",
};

export function PostCard({ post }: { post: Post }) {
  const { id, thumnail, title, isFeatured, tags, status, views } = post;

  return (
    <Card className="group relative flex h-full flex-col overflow-hidden">
      {/* Thumbnail */}
      <div className="relative aspect-video w-full bg-muted">
        {thumnail ? (
          <Image
            src={thumnail}
            alt={title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground">
            <ImageOff className="size-8" aria-hidden />
            <span className="sr-only">No thumbnail</span>
          </div>
        )}

        {isFeatured && (
          <Badge className="absolute left-3 top-3 gap-1">
            <Star className="size-3 fill-current" aria-hidden />
            Featured
          </Badge>
        )}
      </div>

      {/* Title + status */}
      <CardHeader className="space-y-2">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="line-clamp-2 text-lg leading-snug">
          
              {title}
           
          </CardTitle>
          <Badge variant="secondary" className={statusStyles[status]}>
            {status.charAt(0) + status.slice(1).toLowerCase()}
          </Badge>
        </div>
      </CardHeader>

      {/* Tags */}
      <CardContent className="flex-1">
        {tags.length > 0 ? (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline">
                #{tag}
              </Badge>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">No tags</p>
        )}
      </CardContent>

      {/* Views */}
      <CardFooter className="text-sm text-muted-foreground">
        
          <div className="flex items-center justify-between gap-2">
            <span className="flex items-center gap-1.5">
     <Eye className="size-4" aria-hidden />
          {views.toLocaleString()} {views === 1 ? "view" : "views"}
            
        </span>
        <Link
              href={`/Posts/${id}`}
              className="after:absolute after:inset-0 hover:underline focus-visible:outline-none"
            > click more</Link>
          </div>
     
      </CardFooter>
    </Card>
  );
}

/* Usage:
 *
 * <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
 *   {posts.map((post) => (
 *     <PostCard key={post.id} post={post} />
 *   ))}
 * </div>
 */
