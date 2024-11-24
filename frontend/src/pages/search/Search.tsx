import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { useMusicStore } from "@/stores/useMusicStore";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from "lucide-react";
import { useUser } from "@clerk/clerk-react";
import { Song } from "@/types";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const searchSongs = useMusicStore((state) => state.searchSongs);
  const searchResults = useMusicStore((state) => state.searchResults);
  const isLoading = useMusicStore((state) => state.isLoading);
  const error = useMusicStore((state) => state.error);
  const { user } = useUser();

  const initializeQueue = usePlayerStore((state) => state.initializeQueue);
  // const setCurrentSong = usePlayerStore((state) => state.setCurrentSong);
  const playAlbum = usePlayerStore((state) => state.playAlbum);

  useEffect(() => {
    // Debounce to avoid excessive API calls
    const timeout = setTimeout(() => {
      if (query) {
        searchSongs(query);
      }
    }, 500); // Trigger search after 500ms of inactivity

    return () => clearTimeout(timeout);
  }, [query, searchSongs]);

  useEffect(() => {
    if (searchResults.length > 0) {
      // Initialize the player queue with the search results
      initializeQueue(searchResults);
    }
  }, [searchResults, initializeQueue]);

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setQuery(event.target.value);
  };

  const handleSongClick = (song: Song, index: number | undefined) => {
    playAlbum(searchResults, index);
    console.log("Song clicked:", song);
    
  };

  return (
    <div className="mb-8 px-4 bg-neutral-900 h-[100vh] overflow-y-auto">
      <div className="sticky top-0 bg-neutral-900 pb-4 z-20">
        <div className="bg-neutral-900 p-8" />
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
          Looking for songs{user?.firstName ? `, ${user.firstName}` : ""}?
        </h2>
        <div className="flex items-center gap-2 mb-4 relative max-w-md mx-auto">
          <Input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="What do you want to play?"
            className="pl-10 pr-4 py-2 w-full bg-neutral-800 text-white rounded-full"
          />
          <Search className="absolute left-3 text-emerald-400" />
        </div>
      </div>
      {error && (
        <div className="text-red-500 mb-4 text-lg text-center">
          {error} Something went wrong
        </div>
      )}
      <div className="w-full max-w-lg mx-auto">
        <ScrollArea className="w-full relative">
          {query && searchResults.length > 0 ? (
            <div className="flex flex-col gap-4">
              {/* Render the first song in a larger box */}
              <div
                key={searchResults[0]._id}
                onClick={() => handleSongClick(searchResults[0], 0)}
                className="flex items-center bg-zinc-800/50 rounded-md overflow-hidden
                  hover:bg-emerald-950/50 transition-colors cursor-pointer relative p-4 mt-4"
                style={{ height: "200px" }}
              >
                <img
                  src={searchResults[0].imageUrl}
                  alt={searchResults[0].title}
                  className="w-40 h-40 object-cover flex-shrink-0"
                />
                <div className="flex-1 pl-6">
                  <p className="font-bold text-xl truncate">
                    {searchResults[0].title}
                  </p>
                  <p className="text-sm text-zinc-400 truncate">
                    {searchResults[0].artist}
                  </p>
                </div>
              </div>

              {/* Render the remaining songs in a single column */}
              {searchResults.slice(1).map((song, index) => (
                <div
                  key={song._id}
                  onClick={() => handleSongClick(song, index + 1)}
                  className="flex items-center bg-zinc-800/50 rounded-md overflow-hidden
                  hover:bg-zinc-700/50 transition-colors cursor-pointer relative p-2"
                >
                  <img
                    src={song.imageUrl}
                    alt={song.title}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover flex-shrink-0"
                  />
                  <div className="flex-1 p-4">
                    <p className="font-medium truncate">{song.title}</p>
                    <p className="text-sm text-zinc-400 truncate">
                      {song.artist}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : !query && !isLoading ? (
            <div className="flex flex-col gap-4 mt-10">
              {/* Render a skeleton component when there is no search */}
              <div
                className="flex items-center bg-zinc-800/50 rounded-md overflow-hidden relative p-4 mt-4 animate-pulse"
                style={{ height: "200px" }}
              >
                <div className="w-40 h-40 bg-zinc-800 flex-shrink-0" />
                <div className="flex-1 pl-6 space-y-2">
                  <div className="h-6 bg-zinc-800 rounded w-3/4" />
                  <div className="h-4 bg-zinc-800 rounded w-1/2" />
                </div>
              </div>
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center bg-zinc-800/50 rounded-md overflow-hidden relative p-2 animate-pulse"
                >
                  <div className="w-16 h-16 bg-zinc-800 flex-shrink-0" />
                  <div className="flex-1 p-4 space-y-2">
                    <div className="h-4 bg-zinc-800 rounded w-3/4" />
                    <div className="h-3 bg-zinc-800 rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            query &&
            !isLoading && (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  Song not found
                </h2>
                <p className="text-neutral-400 max-w-md">
                  Looks like this track got lost in the shuffle. Search for
                  something else.
                </p>
              </div>
            )
          )}
          {/* Fade in bottom and top */}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-neutral-900 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-neutral-900 to-transparent pointer-events-none z-10"></div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default SearchComponent;
