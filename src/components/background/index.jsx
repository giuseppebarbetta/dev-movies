import { BackgroundImage, BackgroundGradient } from "./style"

// eslint-disable-next-line react/prop-types
export const Background = ({children, imageBanner}) => {
    return(
        <BackgroundImage bgimage={imageBanner}>
            <BackgroundGradient>
                {children}
            </BackgroundGradient>
        </BackgroundImage>
    )
}