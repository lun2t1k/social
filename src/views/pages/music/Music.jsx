import { componentWrapper } from '../../../helpers/theme'

export default function Music() {
    return (
        <div className={ componentWrapper.default }>
            <div className='p-5'>
                <iframe
                    style={ { borderRadius: '12px' } }
                    src='https://open.spotify.com/embed/playlist/37i9dQZF1DWWQRwui0ExPn?utm_source=generator&theme=0'
                    width='100%'
                    height='550'
                    allowFullScreen=''
                    allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                    loading='lazy'
                ></iframe>
            </div>
        </div>
    )
}
