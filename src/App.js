import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import { Provider } from 'react-redux';
import store from './utils/store';
import ComingSoon from "./components/ComingSoon";
import SearchResultPage from "./components/SearchResultPage";

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <Body />,
		children: [
			{
				path: '/',
				element: <MainContainer />
			},
			{
				path: '/watch',
				element: <WatchPage />
			},
			{
				path: '/comingsoon',
				element: <ComingSoon />
			},
			{
				path: '/results',
				element: <SearchResultPage />
			}
		]
	}
]);

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<RouterProvider router={appRouter} />
			</div>
		</Provider>
	);
}

export default App;
	