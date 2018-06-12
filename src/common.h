#ifndef NAPI_SRC_COMMON_H_
#define NAPI_SRC_COMMON_H_

#include <node_api.h>

#define GET_AND_THROW_LAST_ERROR(env)                               \
  do                                                                \
  {                                                                 \
    const napi_extended_error_info *error_info;                     \
    napi_get_last_error_info((env), &error_info);                   \
    bool is_pending;                                                \
    napi_is_exception_pending((env), &is_pending);                  \
    /* Don't throw if exception is already pending */               \
    if (!is_pending)                                                \
    {                                                               \
      const char *error_message = error_info->error_message != NULL \
                                      ? error_info->error_message   \
                                      : "empty error message";      \
      napi_throw_error((env), NULL, error_message);                 \
    }                                                               \
  } while (0)

#define NAPI_CALL_BASE(env, the_call, ret_value) \
  do                                             \
  {                                              \
    if ((the_call) != napi_ok)                   \
    {                                            \
      GET_AND_THROW_LAST_ERROR((env));           \
      return ret_value;                          \
    }                                            \
  } while (0)

#define NAPI_CALL(env, the_call) NAPI_CALL_BASE(env, the_call, NULL)

#define DECLARE_NAPI_PROPERTY(name, func)       \
  {                                             \
    (name), 0, (func), 0, 0, 0, napi_default, 0 \
  }

#endif