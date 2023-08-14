export default function Container({ styles, children }) {
    return <div className={`container mx-auto lg:w-2/3 px-4 ${styles}`}>{children}</div>;
}