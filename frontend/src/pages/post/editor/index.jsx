import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Container from "components/Container";

export default function EditorPost() {
    const [content, setContent] = useState("");
    const [value, setValue] = useState("");

    console.log(value);
    console.log(content);

    return (
        <Container>
            <div className="mx-auto md:w-[750px] overflow-hidden p-8">
                <div className="text-3xl text-gray-450 font-semibold mb-4">New blog title here......</div>
                <Editor
                    apiKey="wsa23774t6ncb0427t0siawwncy8j2oqk1b3qmpybivf0kun"
                    value={value}
                    initialValue="Start writting your blog"
                    onEditorChange={(newValue, editor) => {
                        setValue(newValue);
                        setContent(editor.getContent({ format: "text" }));
                    }}
                    onInit={(evt, editor) => {
                        setContent(editor.getContent({ format: "text" }));
                    }}
                    init={{
                        menubar: false,
                        toolbar: 'undo redo | blocks | ' +
                            'bold italic forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help',
                        plugins: "mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss"
                    }}
                />
            </div>
        </Container>
    );
}