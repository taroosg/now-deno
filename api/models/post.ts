import { v4 } from "https://deno.land/std/uuid/mod.ts";

export class Post {
  public id: string;
  public createdAt: string;
  constructor(public title: string, public content: string) {
    this.id = v4.generate();
    this.createdAt = (new Date()).toLocaleDateString();
  }

  toJson() {
    return {
      id: this.id,
      title: this.title,
      content: this.content,
      createdAt: this.createdAt,
    };
  }
}

// DBでの永続化はせずインメモリで管理
export const posts = [] as Post[];

// postsの初期記事追加
export const initializedPosts = () => {
  posts.push(new Post("Hello Blog", "My first post."));
};

initializedPosts();
