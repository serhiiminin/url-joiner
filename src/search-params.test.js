import test from "ava";
import { parseSearch, mergeSearch } from "./search-params";

test("Parse search string to object", t => {
  t.deepEqual(parseSearch(), {});
  t.deepEqual(parseSearch("q=hello&name=david"), { q: "hello", name: "david" });
});

test("Merge search params to string", t => {
  t.is(mergeSearch("", {}), "");
  t.is(mergeSearch("name=david", {}), "name=david");
  t.is(mergeSearch("", { name: "david" }), "name=david");
  t.is(mergeSearch("name=david&surname=monad", { name: "nick" }), "name=nick&surname=monad");
  t.is(mergeSearch("q=hello&name=david", { age: 8 }), "q=hello&name=david&age=8");
});
