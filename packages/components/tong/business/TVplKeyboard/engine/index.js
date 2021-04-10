import v1 from "./v1";
import v2 from "./v2";

function factory(version) {
  if (version === "2") {
    return v2;
  }
  return v1;
}

export default {
  factory
};
