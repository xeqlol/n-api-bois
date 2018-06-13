#include "myobject.h"
#include "../common.h"

size_t finalize_count = 0;

MyObject::MyObject() : env_(nullptr), wrapper_(nullptr) {}
MyObject::~MyObject()
{
  finalize_count++;
  napi_delete_reference(env_, wrapper_);
}

void MyObject::Destructor(napi_env env, void *nativeObject, void *)
{
  MyObject *obj = static_cast<MyObject *>(nativeObject);
  delete obj;
}

napi_ref MyObject::constructor;

napi_status MyObject::Init(napi_env env)
{
  napi_status status;

  napi_value cons;
  status = napi_define_class(env, "MyObject", -1, New, nullptr, 0, nullptr, &cons);
  if (status != napi_ok)
    return status;

  status = napi_create_reference(env, cons, 1, &constructor);
  if (status != napi_ok)
    return status;

  return napi_ok;
}

napi_value MyObject::New(napi_env env, napi_callback_info info)
{
  size_t argc = 1;
  napi_value args[1];
  napi_value _this;
  NAPI_CALL(env, napi_get_cb_info(env, info, &argc, args, &_this, nullptr));

  MyObject *obj = new MyObject();

  napi_valuetype valuetype;
  NAPI_CALL(env, napi_typeof(env, args[0], &valuetype));

  if (valuetype == napi_undefined)
  {
    obj->val_ = 0;
  }
  else
  {
    NAPI_CALL(env, napi_get_value_double(env, args[0], &obj->val_));
  }

  obj->env_ = env;

  NAPI_CALL(env, napi_wrap(env, _this, obj, MyObject::Destructor, nullptr, &obj->wrapper_));

  return _this;
}

napi_status MyObject::NewInstance(napi_env env, napi_value arg, napi_value *instance)
{
  napi_status status;

  const int args = 1;
  napi_value argv[args] = {arg};

  napi_value cons;
  status = napi_get_reference_value(env, constructor, &cons);
  if (status != napi_ok)
    return status;

  status = napi_new_instance(env, cons, args, argv, instance);
  if (status != napi_ok)
    return status;

  return napi_ok;
}