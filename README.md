This was an experiment to check the behavior of the file system, especially in scenarios of highly concurrent access.

The major conclusion was that you have to watch out especially for operations that "overwrite" content, cause "overwriting" is not an atomic operation.
