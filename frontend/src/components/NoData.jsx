import noData from "assets/images/undraw_no_data_re_kwbl.svg";

export default function NoData() {
    return (
        <div className="p-8 flex flex-col items-center justify-center">
            <img
                src={noData}
                alt="no data"
                className="h-60 w-60"
            />
            <p className="py-5 pl-5 font-semibold">There is nothing to see here :((</p>
        </div>
    );
}