type SongLyricsProps = {
  lyricsHTML: string
}

export const SongLyrics = ({ lyricsHTML }: SongLyricsProps) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: lyricsHTML }} />
  )
}