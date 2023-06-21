import type { MutableRefObject } from 'react';
export declare type PlayableMediaTag = {
    play: () => void;
    id: string;
};
export declare type TimelineContextValue = {
    frame: number;
    playing: boolean;
    rootId: string;
    playbackRate: number;
    imperativePlaying: MutableRefObject<boolean>;
    setPlaybackRate: (u: React.SetStateAction<number>) => void;
    audioAndVideoTags: MutableRefObject<PlayableMediaTag[]>;
};
export declare type SetTimelineContextValue = {
    setFrame: (u: React.SetStateAction<number>) => void;
    setPlaying: (u: React.SetStateAction<boolean>) => void;
};
export declare const TimelineContext: import("react").Context<TimelineContextValue>;
export declare const SetTimelineContext: import("react").Context<SetTimelineContextValue>;
export declare const useTimelinePosition: () => number;
export declare const useTimelineSetFrame: () => (u: React.SetStateAction<number>) => void;
declare type PlayingReturnType = readonly [
    boolean,
    (u: React.SetStateAction<boolean>) => void,
    MutableRefObject<boolean>
];
export declare const usePlayingState: () => PlayingReturnType;
export {};
