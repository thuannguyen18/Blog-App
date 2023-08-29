import React, { useState, useEffect, useRef } from "react";
import { createReactEditorJS } from "react-editor-js";
import Embed from '@editorjs/embed';
import Header from '@editorjs/header';
import EditorJS from "@editorjs/editorjs";
import Container from "components/Container";

const ReactEditorJS = createReactEditorJS();
const DEFAULT_INITIAL_DATA = {
    "time": new Date().getTime(),
    "blocks": [
        {
            "type": "header",
            "data": {
                "text": "Writting content here...",
                "level": 1
            }
        },
    ]
}

export default function EditorPost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState([]);
    const ejInstance = useRef();
    const initEditor = () => {
        const editor = new EditorJS({
            holder: 'editorjs',
            onReady: () => {
                ejInstance.current = editor;
            },
            autofocus: true,
            data: DEFAULT_INITIAL_DATA,
            onChange: async () => {
                let content = await editor.saver.save();
                setContent(content.blocks);
            },
            tools: {
                embed: Embed,
                header: Header,
            }
        });
    }

    useEffect(() => {
        if (!ejInstance.current) {
            initEditor();
        }

        return () => {
            ejInstance?.current?.destroy();
            ejInstance.current = null;
        };
    }, []);

    console.log(title);
    console.log(content);

    return (
        <Container>
            <div className="mx-auto md:w-[750px] overflow-hidden p-8">
                <input 
                    value={title}
                    type="text" 
                    placeholder="New title post here......" 
                    className="text-3xl text-gray-700 placeholder-gray-450 font-semibold mb-4 px-4 w-full focus:outline-0" 
                    onChange={(e) => setTitle(e.target.value)}
                />
                <div id="editorjs"></div>
            </div>
            <div className="fixed md:top-[92%] md:left-[42%] z-10">
                <button className="text-sm border border-gray-300 rounded h-10 px-4 hover:bg-gray-200 mr-2">Save draft</button>
                <button className="text-sm text-white rounded bg-sky-500 h-10 px-4 hover:bg-sky-600">Next step</button>
            </div>
        </Container>
    );
}