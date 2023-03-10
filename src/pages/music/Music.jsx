export default function Music() {
    return (
        <div className="w-full overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 p-5">
            <iframe
                title="SoundCloud"
                width="100%"
                height="550"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/305665701&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
        </div>
    )
}
