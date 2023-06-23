import { useContext } from 'preact/hooks';
import Card from '../../../../../Component/Cards/Card/Card';
import { colorGen1 } from '../../../../../Function/RandomColorGenerator';
import './Feed.css'
import { UserInfoContext } from '../../../Dashboard';

const Feed = () => {
    const userInfo = useContext(UserInfoContext);
    const randomBorderRadGenerator = () => {
        const fRad = [8, 16, 32, 64];
        return `${fRad[Math.floor(Math.random() * 4)]}px ${fRad[Math.floor(Math.random() * 4)]}px ${fRad[Math.floor(Math.random() * 4)]}px ${fRad[Math.floor(Math.random() * 4)]}px `;
    }

    return(
        <>
            {userInfo?.pdfs?.map((data, index) => (
                <Card borderRad={randomBorderRadGenerator()} bgColor={colorGen1()} key={index} email={userInfo?.email} pdfId={data}/>
            ))}
        </>
    );
}

export default Feed;