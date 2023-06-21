/// <reference types="react" />
export declare type MediaVolumeContextValue = {
    mediaMuted: boolean;
    mediaVolume: number;
};
export declare type SetMediaVolumeContextValue = {
    setMediaMuted: (u: React.SetStateAction<boolean>) => void;
    setMediaVolume: (u: number) => void;
};
export declare const MediaVolumeContext: import("react").Context<MediaVolumeContextValue>;
export declare const SetMediaVolumeContext: import("react").Context<SetMediaVolumeContextValue>;
declare type MediaVolumeReturnType = readonly [number, (u: number) => void];
export declare const useMediaVolumeState: () => MediaVolumeReturnType;
declare type MediaMutedReturnType = readonly [
    boolean,
    (u: React.SetStateAction<boolean>) => void
];
export declare const useMediaMutedState: () => MediaMutedReturnType;
export {};
