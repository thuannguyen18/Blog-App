export default function Container({ styles, children }) {
    return (
        <div className={`container mx-auto lg:w-[1200px] px-4 ${styles}`}>
            {children}
        </div>
    );
}