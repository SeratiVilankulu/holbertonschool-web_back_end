#!/usr/bin/python3
''' FIFO caching: Create a class FIFOCache that inherits from BaseCaching
                  and is a caching system
'''

BaseCaching = __import__('base_caching').BaseCaching


class FIFOCache(BaseCaching):
   ''' A FIFO Cache.
        Inherits all behaviors from BaseCaching except, upon any attempt to
        add an entry to the cache when it is at max capacity (as specified by
        BaseCaching.MAX_ITEMS), it discards the oldest entry to accommodate for
        the new one.
        Attributes:
          __init__ - method that initializes class instance
          put - method that adds a key/value pair to cache
          get - method that retrieves a key/value pair from cache '''

   def __init__(self):
        super().__init__()
        self.key_indexes = []

    def put(self, key, item):
        ''' Add key/value pair to cache data.
            If cache is at max capacity (specified by BaseCaching.MAX_ITEMS),
            discard oldest entry in cache to accommodate new entry. '''
         if key and item:
            if key in self.cache_data:
                self.cache_data[key] = item
                return

            if len(self.cache_data) >= BaseCaching.MAX_ITEMS:
                item_discarded = self.key_indexes.pop(0)
                del self.cache_data[item_discarded]
                print("DISCARD:", item_discarded)

            self.cache_data[key] = item
            self.key_indexes.append(key)

    def get(self, key):
        ''' Return value stored in `key` key of cache.
            If key is None or does not exist in cache, return None. '''
         if key in self.cache_data:
            return self.cache_data[key]
        return None