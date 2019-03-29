import test from "ava";
import { getUrlParts, joinUrl, joinPath } from "./join-utils";

test("Get url parts", t => {
  t.deepEqual(getUrlParts(), ["", ""]);
  t.deepEqual(getUrlParts("root/user?max=10&name=nick"), ["root/user", "max=10&name=nick"]);
});

test("Join url", t => {
  t.is(joinUrl("", ""), "");
  t.is(joinUrl("root/user"), "root/user");
  t.is(joinUrl("/", "max=10&name=nick"), "/?max=10&name=nick");
  t.is(joinUrl("root/user", "max=10&name=nick"), "root/user?max=10&name=nick");
});

test("Merge search string", t => {
  t.is(joinPath("root/user"), "root/user");
  t.is(joinPath("root/user", "/id/", "/name"), "root/user/id/name");
});
