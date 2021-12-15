const PostFormView = ({
  onPostName,
  onPostTitle,
  onPostText,
  onPostUrl,
  onPost,
}) => {
  return (
    <div className="md:grid md:grid-cols-3 md:gap-6">
      <div className="md:col-span-1">
        <div className="px-4 sm:px-0">
          <h1 className="text-4xl font-extrabold tracking-tight text-black">
            Submit a Twitter post
          </h1>
          <p className="mt-6 text-gray-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="mt-4 text-gray-dark">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip. Excepteur!
          </p>
        </div>
      </div>
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form
          className="shadow overflow-hidden sm:rounded-md"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 lg:col-span-3">
                <label className="block text-sm font-medium text-gray-darker">
                  Title
                </label>
                <input
                  onInput={(e) => {
                    onPostTitle(e.target.value);
                  }}
                  type="text"
                  name="title"
                  id="title"
                  className="mt-1 focus:ring-black focus:border-black block w-full shadow-sm sm:text-sm border-gray-light rounded-md"
                  placeholder="e.g 'My latest marketing post about Black White Club'"
                  required
                  minLength={6}
                />
              </div>
              <div className="col-span-6 lg:col-span-3">
                <label
                  htmlFor="input-username"
                  className="block text-sm font-medium text-gray-darker"
                >
                  Your name
                </label>
                <input
                  onInput={(e) => {
                    onPostName(e.target.value);
                  }}
                  type="text"
                  name="input-username"
                  id="input-username"
                  autoComplete="nickname"
                  className="mt-1 focus:ring-black focus:border-black block w-full shadow-sm sm:text-sm border-gray-light rounded-md"
                  placeholder="What should we call you?"
                  required
                  minLength={2}
                />
              </div>
              <div className="col-span-6 lg:col-span-3">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-darker"
                >
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    onInput={(e) => {
                      onPostText(e.target.value);
                    }}
                    id="about"
                    name="about"
                    rows={3}
                    className="shadow-sm focus:ring-black focus:border-black mt-1 block w-full sm:text-sm border border-gray-light rounded-md"
                    placeholder="Describe the purpose of this marketing post."
                    defaultValue={""}
                    required
                    minLength={10}
                  />
                </div>
              </div>
              <div className="col-span-6 lg:col-span-3">
                <label
                  htmlFor="tweet-url"
                  className="block text-sm font-medium text-gray-darker"
                >
                  Tweet URL
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-light bg-gray-lighter text-gray text-sm">
                    https://
                  </span>
                  <input
                    type="text"
                    name="tweet-url"
                    id="tweet-url"
                    className="focus:ring-black focus:border-black flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-light"
                    placeholder="www.twitter.com/user/status/tweet-id"
                    onInput={(e) => {
                      onPostUrl(e.target.value);
                    }}
                    required
                    minLength={30}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              onClick={(e) => {
                onPost();
              }}
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-darker focus:outline-none"
            >
              Submit Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default PostFormView;
