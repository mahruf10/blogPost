import React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../@/components/ui/table"
import { blogService } from "../../../service/blog.services"
import { Session } from "../../../service/Session"

const BlogHistoryPage = async () => {
  const session = await Session()

  const id = session.data.user.id

  const { data } = await blogService.getBlogPostById(id)

  console.log(data)

  return (
    <Table className="w-4xl mx-auto rounded-md">
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Views</TableHead>
          <TableHead className="text-right">Featured</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.data.map((blog) => (
          <TableRow key={blog.id}>
            <TableCell className="font-medium">
              {blog.title}
            </TableCell>

            <TableCell>
              {blog.status}
            </TableCell>

            <TableCell>
              {blog.views}
            </TableCell>

            <TableCell className="text-right">
              {blog.isFeatured ? "Yes" : "No"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default BlogHistoryPage