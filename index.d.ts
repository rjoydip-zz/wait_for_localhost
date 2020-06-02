declare namespace waitForLocalhost {
	export interface Options {
		/**
		@default 8080
		*/
		port?: number;

		/**
		Use a custom path.
		
		For example, `/health` for a health-check endpoint.
		@default '/'
		*/
		path?: string;

		/**
		Use the `GET` HTTP-method instead of `HEAD` to check if the server is running.
		@default false
		*/
		useGet?: boolean;
	}
}

declare const waitForLocalhost: {
	/**
	Wait for localhost to be ready.
	@example
	```
	(async () => {
		await waitForLocalhost({port: 8080});
		console.log('Server is ready');
	})();
	```
	 */
	(options?: waitForLocalhost.Options): Promise<void>;
	default: typeof waitForLocalhost;
};

export = waitForLocalhost;