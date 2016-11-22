# Libraries

## View Binding: Android Annotations
- Official: [http://androidannotations.org](http://androidannotations.org/)
- Repository: [https://github.com/excilys/androidannotations](https://github.com/excilys/androidannotations)
- Wiki & Documentation: [https://github.com/excilys/androidannotations/wiki](https://github.com/excilys/androidannotations/wiki)

## Custom Fonts: Calligraphy
- Repository: [https://github.com/chrisjenx/Calligraphy](https://github.com/chrisjenx/Calligraphy)

## UI Form Validation: Saripaar
- Repository: [https://github.com/ragunathjawahar/android-saripaar](https://github.com/ragunathjawahar/android-saripaar)

## Adapters: Quick Adapter
- Repository: [https://github.com/JoanZapata/base-adapter-helper](https://github.com/JoanZapata/base-adapter-helper)

## Asynchronous: Bolts
- Repository: [https://github.com/BoltsFramework/Bolts-Android](https://github.com/BoltsFramework/Bolts-Android)

## DI/IoC: Dagger 2
- Official: [http://google.github.io/dagger](http://google.github.io/dagger/)
- Repository: [https://github.com/google/dagger](https://github.com/google/dagger)

## Images: Picasso, Glide
- Picasso: [https://github.com/square/picasso](https://github.com/square/picasso)
- Glide: [https://github.com/bumptech/glide](https://github.com/bumptech/glide)

## JSON: Gson
- Repository: [https://github.com/google/gson](https://github.com/google/gson) 

## Http: Retrofit 2
- Repository: [https://github.com/square/retrofit](https://github.com/square/retrofit)

## Realtime Communication:
- Socket:
- SignalR: [https://github.com/SignalR/java-client](https://github.com/SignalR/java-client)
- XMPP: [https://github.com/igniterealtime/Smack](https://github.com/igniterealtime/Smack)

## Databases: 
- Realm
- GreenDAO

## Key-value Storage: Hawk
- Repository: [https://github.com/orhanobut/hawk](https://github.com/orhanobut/hawk)

## DateTime Replacement: Joda Time
- Repository: [https://github.com/dlew/joda-time-android](https://github.com/dlew/joda-time-android)

## Event bus: Green Robot Event Bus
- Repository: [https://github.com/greenrobot/EventBus](https://github.com/greenrobot/EventBus)


>**DON'T & DO**

1. **DO USE** [Calligraphy](#calligraphy) for custom font

2. ~~**DO NOT USE**~~ `findViewById()`, **DO USE** [Android Annotation](#android-annotations) for view binding actions: 
`@ViewById`, `@Click` ..... instead

3. ~~**DO NOT**~~ start Activities/Fragments and pass arguments manually, **DO USE** [AA @Extras](https://github.com/excilys/androidannotations/wiki/Extras) & [AA @FragmentArg](https://github.com/excilys/androidannotations/wiki/FragmentArg)

4. **DO USE** [Saripaar](#saripaar) for any screens that required user input, **avoid** custom validation 

5. **DO INHERIT FROM** [Quick Adapter](#quickadapter) for any application-wide adapters, **avoid** hand-baked adapters

6. ~~**DO NOT USE**~~ ``AsyncTask`` for asynchronous tasks, **DO USE** [Bolts](#bolts) combine with [AA @Background](https://github.com/excilys/androidannotations/wiki/WorkingWithThreads#background) & [AA @UiThread](https://github.com/excilys/androidannotations/wiki/WorkingWithThreads#uithread) instead

7. ~~**DO NOT USE**~~ `SharedPreferences` to store/fetch values, **DO USE** [Hawk](#hawk) instead

8. ~~**DO NOT USE**~~ default `java.util.Date` for datetime fields, **DO USE** [JodaTime](#joda-time) and ``org.joda.time.DateTime`` instead

