export declare namespace Hypr {
    enum EventIds {
        workspace = "workspace",
        focusedmon = "focusedmon",
        activewindow = "activewindow",
        fullscreen = "fullscreen",
        monitorremoved = "monitorremoved",
        monitoradded = "monitoradded",
        createworkspace = "createworkspace",
        destroyworkspace = "destroyworkspace",
        moveworkspace = "moveworkspace",
        activelayout = "activelayout",
        openwindow = "openwindow",
        closewindow = "closewindow",
        movewindow = "movewindow",
        openlayer = "openlayer",
        closelayer = "closelayer",
        submap = "submap",
        changefloatingmode = "changefloatingmode",
        urgent = "urgent",
        minimize = "minimize",
        screencast = "screencast",
        windowtitle = "windowtitle"
    }
    type EventId = keyof typeof EventIds;
    function addEventListener(eventIds: (EventId | 'all') | EventId[], listener: (data: object) => any): void;
    function removeEventListener(eventIds: (EventId | 'all') | EventId[], listener: (data: object) => any): void;
    function startEventsListening(): void;
    function stopEventsListening(): void;
}
