import { HeaderSection, NameSection, LogoImage } from './styles';

function Header({ConnectionButton}) {
    return (
        <HeaderSection>
            <NameSection>
                The DAO Society <LogoImage/>
            </NameSection>
            <ConnectionButton startIcon=""/>
        </HeaderSection>
    );
}

export default Header;
