import { FooterSection, NameSection, LinksSection, Discord, Solana } from './styles';

import DiscordImage from "../../Images/discord.svg";
// import DiscordImageJS from "../../Images/discord.js";
import MediumImage from "../../Images/medium.svg";
import TwitterImage from "../../Images/twitter.svg";
import YoutubeImage from "../../Images/youtube.svg";

import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

function Footer(props) {
    const SliderText = `${props.theme} mode`.toUpperCase()
    return (
        <FooterSection>
            <Solana/>
            <LinksSection>
                <img src={DiscordImage} height="30px" width="30px"/>
                {/*<DiscordImageJS color={"red"}/>*/}
                <img src={MediumImage} height="30px" width="30px"/>
                <img src={TwitterImage} height="30px" width="30px"/>
                <img src={YoutubeImage} height="30px" width="30px"/>
                {/*<FormControlLabel*/}
                {/*        value={props.theme}*/}
                {/*        label={SliderText}*/}
                {/*        labelPlacement="start"*/}
                {/*        onChange={props.changeTheme}*/}
                {/*        control={<Switch defaultChecked color="warning" />}*/}
                {/*/>*/}
            </LinksSection>
        </FooterSection>
    );
}

export default Footer;
