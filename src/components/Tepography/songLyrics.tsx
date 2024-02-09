type SongLyricsProps<T> = {
  lyricsHTML: T;
}

export const SongLyrics = <T,>({ lyricsHTML }: SongLyricsProps<T>) => {
  return (
    <div className="text-xl" dangerouslySetInnerHTML={{ __html: String (lyricsHTML) }} />
  )
}