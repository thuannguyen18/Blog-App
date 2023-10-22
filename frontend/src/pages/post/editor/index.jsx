import React, { useState, useEffect, useRef } from "react";
import Embed from '@editorjs/embed';
import Header from '@editorjs/header';
import EditorJS from "@editorjs/editorjs";
import Container from "components/Container";
import EditorModal from "components/EditorModal";
import Loading from "components/Loading";
import { CATEGORIES as categories } from "constants";
import { useGlobalContext } from "context/context";

export default function EditorPost() {
    // Global State
    const {
        closeEditorMode,
        createBlog,
        saveDraft,
        saveDraftLoading,
        draftUpdate,
        setDraftUpdate
    } = useGlobalContext();


    // Local State
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState(draftUpdate?.title || "");
    const [content, setContent] = useState([
        {
            "type": "header",
            "data": {
                "text": draftUpdate?.content,
                "level": 1
            }
        },
    ]);
    const [subTitle, setSubTitle] = useState("");
    const [category, setCategory] = useState("");
    const [thumbnail, setThumbnail] = useState();


    // Editor js config
    const DEFAULT_INITIAL_DATA = {
        "time": new Date().getTime(),
        "blocks": content
    }

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
            },
        });
    }

    useEffect(() => {
        if (!ejInstance.current) {
            initEditor();
        }

        return () => {
            ejInstance?.current?.destroy();
            ejInstance.current = null;
            closeEditorMode();
            setDraftUpdate({
                title: "",
                content: ""
            });
        };
    }, []);

    // Preview thumbnail 
    const handleFile = (e) => {
        const fileUpload = e.target.files[0];
        const previewUrl = URL.createObjectURL(fileUpload);
        fileUpload.preview = previewUrl;
        setThumbnail(fileUpload);
    }

    // When user click create button
    const handleCreate = () => {
        const blogInfo = {
            title,
            subTitle,
            content,
            category,
            thumbnail,
        }
        createBlog(blogInfo);
    }

    // When user click save draft buttons
    const handleSave = () => {
        const draftInfo = { title, content };
        saveDraft(draftInfo);
    }

    // Disable save button
    const disableSaveBtn = title ? "cursor-poniter" : "bg-zinc-200 cursor-not-allowed";

    // Change title
    useEffect(() => {
        document.title = "Write new blog...";
        return () => document.title = "MyBlog";
    });

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
                <button
                    type="button"
                    className={`text-sm border border-gray-300 bg-white rounded h-10 px-4 hover:bg-gray-200 mr-2 ${disableSaveBtn}`}
                    onClick={handleSave}
                    disabled={!title}
                >
                    {saveDraftLoading ? "Saving..." :"Save draft"}
                </button>
                <button className="text-sm text-white rounded bg-sky-500 h-10 px-4 hover:bg-sky-600" onClick={() => setOpen(true)}>Next step</button>
            </div>
            <EditorModal visible={open}>
                <div className="w-[700px] p-4">
                    <div className="py-3">
                        <p className="text-sm text-gray-700 mb-2 font-semibold">Subtitle (optional)</p>
                        <textarea
                            className="w-full h-[69px] border border-gray-300 rounded px-4 py-3 focus:outline-0"
                            value={subTitle}
                            onChange={(e) => setSubTitle(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="py-3">
                        <p className="text-sm text-gray-700 mb-2 font-semibold">Category</p>
                        <select
                            name="category"
                            id="category"
                            className="w-full h-[43px] rounded px-3 focus:outline-0 bg-gray-350 text-sm"
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option selected disabled hidden>{category || "-- Choose category --"}</option>
                            {categories.map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>
                    <div className="py-3">
                        <p className="text-sm text-gray-700 mb-2 font-semibold">Thumbnail for your post</p>
                        <div className="flex items-center justify-center w-full">
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-72 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                                {thumbnail && <img src={thumbnail.preview} alt="thumbnail" className="w-full h-full object-cover rounded" />}
                                {!thumbnail && <React.Fragment>
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" onChange={handleFile} />
                                </React.Fragment>}
                            </label>
                        </div>
                    </div>
                    <div className="mt-4">
                        <button className="text-sm border border-gray-300 rounded h-10 px-4 hover:bg-gray-200 mr-2" onClick={() => setOpen(false)}>Back</button>
                        <button className="text-sm text-white rounded bg-sky-500 h-10 px-4 hover:bg-sky-600" onClick={handleCreate}>Create</button>
                    </div>
                </div>
            </EditorModal>
        </Container>
    );
}