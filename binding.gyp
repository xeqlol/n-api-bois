{
  "targets": [
    {
      "target_name": "hello_world",
      "sources": ["./src/hello_world.c"]
    },
    {
      "target_name": "function_arguments",
      "sources": ["./src/function_arguments.c"]
    },
    {
      "target_name": "callbacks",
      "sources": ["./src/callbacks.c"]
    },
    {
      "target_name": "object_factory",
      "sources": ["./src/object_factory.c"]
    },
    {
      "target_name": "function_factory",
      "sources": ["./src/function_factory.c"]
    },
    {
      "target_name": "object_wrap",
      "sources": ["./src/object_wrap/binding.cc", "./src/object_wrap/myobject.cc"]
    },
    {
      "target_name": "factory_wrap",
      "sources": ["./src/factory_wrap/binding.cc", "./src/factory_wrap/myobject.cc"]
    },
    {
      "target_name": "passing_wrapped",
      "sources": [ "./src/passing_wrapped/binding.cc", "./src/passing_wrapped/myobject.cc" ]
    },
    {
      "target_name": "array",
      "sources": [ "./src/array.c" ]
    },
    {
      "target_name": "async",
      "sources": [ "./src/async.cc" ]
    }
  ]
}