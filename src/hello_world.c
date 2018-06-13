#include "common.h"
#include <node_api.h>
#include <string.h>

napi_value Method(napi_env env, napi_callback_info info)
{
  napi_value world;
  const char *str = "world";
  size_t str_len = strlen(str);
  NAPI_CALL(env, napi_create_string_utf8(env, str, str_len, &world));
  return world;
}

napi_value Init(napi_env env, napi_value exports)
{
  napi_property_descriptor desc = {"hello", 0, Method, 0, 0, 0, napi_default, 0};
  NAPI_CALL(env, napi_define_properties(env, exports, 1, &desc));
  return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)