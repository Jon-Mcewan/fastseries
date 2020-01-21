type ToCallWithResult<A, R> = (a: A, next: (err: any, r: R) => void) => void;
type DoneWithResults<T> = (err: any, results: T) => void

declare namespace fastseries {

    interface withResults {
        <A, R0>(
            that: any,
            toCall: [ToCallWithResult<A, R0>],
            arg: A,
            done: DoneWithResults<[R0]>
        ): void;
        <A, R0, R1>(
            that: any,
            toCall: [ToCallWithResult<A, R0>, ToCallWithResult<A, R1>],
            arg: A,
            done: DoneWithResults<[R0, R1]>
        ): void;
        <A, R0, R1, R2>(
            that: any,
            toCall: [ToCallWithResult<A, R0>, ToCallWithResult<A, R1>, ToCallWithResult<A, R2>],
            arg: A,
            done: DoneWithResults<[R0, R1, R2]>
        ): void;
        <A, R0, R1, R2, R3>(
            that: any,
            toCall: [ToCallWithResult<A, R0>, ToCallWithResult<A, R1>, ToCallWithResult<A, R2>, ToCallWithResult<A, R3>],
            arg: A,
            done: DoneWithResults<[R0, R1, R2, R3]>
        ): void;
        <A, R0, R1, R2, R3, R4>(
            that: any,
            toCall: [ToCallWithResult<A, R0>, ToCallWithResult<A, R1>, ToCallWithResult<A, R2>, ToCallWithResult<A, R3>, ToCallWithResult<A, R4>],
            arg: A,
            done: DoneWithResults<[R0, R1, R2, R3, R4]>
        ): void;
        <A, R>(that: any, toCall: Array<ToCallWithResult<A, R>>, arg: A, done: DoneWithResults<R[]>): void;
        <A>(that: any, toCall: Array<(a: A, next: (err?: any) => void) => void>, arg: A, done: DoneWithResults<undefined[]>): void;

        // for each
        <A, R>(that: any, toCall: ToCallWithResult<A, R>, arg: [A],             done: DoneWithResults<[R]>):             void;
        <A, R>(that: any, toCall: ToCallWithResult<A, R>, arg: [A, A],          done: DoneWithResults<[R, R]>):          void;
        <A, R>(that: any, toCall: ToCallWithResult<A, R>, arg: [A, A, A],       done: DoneWithResults<[R, R, R]>):       void;
        <A, R>(that: any, toCall: ToCallWithResult<A, R>, arg: [A, A, A, A],    done: DoneWithResults<[R, R, R, R]>):    void;
        <A, R>(that: any, toCall: ToCallWithResult<A, R>, arg: [A, A, A, A, A], done: DoneWithResults<[R, R, R, R, R]>): void;
        <A, R>(that: any, toCall: ToCallWithResult<A, R>, arg: A[],             done: DoneWithResults<R[]>): void;
        <A>(that: any, toCall: (a: A, next: (err?: any) => void) => void, arg: A[], done: DoneWithResults<undefined[]>): void;
    }

    interface noResults {
        <A>(that: any, toCall: (a: A, next: () => void) => void, arg: A[], done: () => void): void;
        <A>(that: any, toCall: Array<(a: A, next: () => void) => void>, arg: A, done: () => void): void;
    }
}

type fastseries = fastseries.withResults | fastseries.noResults;

declare const fastseries: {
    new(options?: {released?: () => void, results?: true}): fastseries.withResults;
    new(options: {released?: () => void, results: false}): fastseries.noResults;
    (options?: {released?: () => void, results?: true}): fastseries.withResults;
    (options: {released?: () => void, results: false}): fastseries.noResults;
}

export = fastseries;
