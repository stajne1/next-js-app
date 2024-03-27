import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirPath = path.join(process.cwd(), "posts");

export function getPostData(fileName) {
  const filePath = path.join(postDirPath, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  return {
    ...data,
    slug: fileName.replace(/\.md$/, ""),
    content,
  };
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(postDirPath);
  const allPosts = postFiles.map((postFile) => getPostData(postFile));
  return allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
}

export function getFeaturedPosts() {
  return getAllPosts().filter((post) => post.isFeatured);
}
