import { ColorRing } from "react-loader-spinner";

const SpinnerLoader = ({heigth, width}) => {
    return(
        <ColorRing
            visible={true}
            height={heigth}
            width={width}
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#03071e','#370617','#6a040f','#9d0208','#d00000','#dc2f02','#e85d04','#f48c06','#faa307','#ffba08',]}/>
    )
}

export default SpinnerLoader;