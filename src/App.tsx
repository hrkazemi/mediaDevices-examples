import { Routes, Route } from "react-router-dom";
import { NoMatch } from "./pages/NoMatch";
import { Example2 } from "./pages/Example2";
import { Layout } from "./components/Layout/Layout";
import { Example1 } from "./pages/Example1";
import { Example3 } from "./pages/Example3";
import { Example4 } from "./pages/Example4";
import { Example5 } from "./pages/Example5";
import { ExampleQ } from "./pages/ExampleQ";
import { Snapshot } from "./pages/Snapshot";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Example1 />} />
        <Route path="example1" element={<Example1 />} />
        <Route path="example2" element={<Example2 />} />
        <Route path="example3" element={<Example3 />} />
        <Route path="example-q" element={<ExampleQ />} />
        <Route path="example4" element={<Example4 />} />
        <Route path="example5" element={<Example5 />} />
        <Route path="snapshot" element={<Snapshot />} />

        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
