import { useState, useRef } from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { BsCardImage } from "react-icons/bs";

import UserAvatar from "./UserAvatar";
import { useGlobalContext } from "../../context/context";

function User() {
    const { userName, userEmail } = useGlobalContext();
    const [visible, setVisible] = useState(false);
    const hiddenFileInput = useRef(null);

    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    const handleClick = () => {
        hiddenFileInput.current.click();
    }

    const handleChange = (e) => {
        const fileUploaded = e.target.files[0];
        console.log(fileUploaded);
    };

    return (
        <div className="flex items-center justify-center lg:mt-4">
            <div className="w-full lg:w-2/3">
                <div className="w-full h-60 bg-gray-300 rounded-b-xl lg:rounded-3xl"></div>
                <Tippy
                    render={attrs => (
                        <div className="box mt-16 w-80 shadow-3xl rounded-xl p-2.5 bg-white" tabIndex="-1" {...attrs}>
                            <>
                                <button
                                    className="flex items-center h-10 px-2 rounded hover:bg-zinc-100 w-full font-semibold"
                                    onClick={handleClick}
                                >
                                    <BsCardImage className="text-2xl mr-2" />
                                    <span>Add Photo</span>
                                </button>
                                <input
                                    type="file"
                                    style={{ display: 'none' }}
                                    ref={hiddenFileInput}
                                    onChange={handleChange}
                                />
                            </>
                        </div>
                    )}
                    interactive={true}
                    visible={visible}
                    onClickOutside={hide}
                    placement="bottom"
                >
                    <div
                        className="relative"
                        onClick={visible ? hide : show}
                    >
                        <UserAvatar height="40" weight="40" isProfile />
                    </div>
                </Tippy>
                <div className="text-center pt-20 mb-8">
                    <h2 className="text-2xl font-semibold">{userName}</h2>
                    <h3 className="">{userEmail}</h3>
                </div>
                User's Blogs
            </div>
        </div>
    );
}

export default User;