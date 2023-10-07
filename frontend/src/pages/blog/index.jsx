import React from "react";
import Container from "components/Container";
import BlogContent from "components/BlogContent";
import FormComment from "components/comment/CommentForm";

export default function Blog() {
    return (
        <Container styles="my-20 md:w-4/6 lg:w-[750px]">
            <BlogContent />
            <FormComment />
        </Container>
    )
}