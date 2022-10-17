export function fadeInRight(duration: number = 0.3) {
    return {
        from: {
            opacity: 0,
            right: '-100%',
            transition: {
                type: 'easeInOut',
                duration: duration
            }
        },
        to: {
            opacity: 1,
            right: 0,
            transition: {
                type: 'easeInOut',
                duration: duration
            }
        }
    };
}
