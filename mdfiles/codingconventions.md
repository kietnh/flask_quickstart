# Coding Convetions

>**1. NAMING CONVENTIONS**

- **`Rule 1.1`** Non-public, non-static field names use **`camelCase`** style.

```
/* CORRECT */
public class MyClass {        
    private int packagePrivate;
    private int privateNumber;
    protected int protectedNumber;	
}

/* INCORRECT */
public class MyClass {        
    private int PackagePrivate;
    private int _privateVariable;	
    private int mPrivateVariable;
}
```

- **`Rule 1.2`** All fields and propeties must have access modifiers (**`public`**, **`private`**, **`protected`**).

```
/* CORRECT */
public class MyClass {        
    private int packagePrivate;
    private int privateNumber;
    protected int protectedNumber;	
}
	
/** INCORRECT */
public class MyClass {        
    int mPackagePrivate;
    int mPrivate;
    int mProtected;	
}
```

- **`Rule 1.3`** Static final fields (constants) are **`UPPERCASE_WITH_UNDERSCORES`**.

```
public class MyClass {        
    public static final int SOME_CONSTANT = 42;
}
```

- **`Rule 1.4`**

Abstract classes should be named **`BaseClassName`**  
Methods should be named in **`camelCase`** and in following syntax: **`verbNoun`**

```
public interface Activity {        
    void doSomething();
}

public abstract class BaseActivity implements Activity {
    public abstract void doSomething() {
        // TODO: code implementation
    }
}

public class SimpleActivity extends BaseActivity {
    public abstract void doOtherStuffs() {
        // TODO: code implementation
    }
}
```

- **`Rule 1.5`** Enum items should be named as **`UPPERCASE_WITH_UNDERSCORES`**.

```
public enum Fruit {        
    APPLE,
    ORANGE,
    BANANA,
    PEAR
}
```

- **`Rule 1.6`** Resources files should always written in **`lowercase_underscore`**.

**`DRAWABLES`**  
| Asset Type | Prefix | Example
| --- | --- | ---
| **`Action bar`** | ab_ | ab_stacked.9.png
| **`Button`** | btn_ | btn_send_pressed.9.png
| **`Dialog`** | dialog_ | dialog_top.9.png
| **`Divider`** | divider_ | divider_horizontal.9.png
| **`Icon`** | ic_ | ic_star.png
| **`Menu`** | menu_ | menu_submenu_bg.9.png
| **`Notification`** | notification_ | notification_bg.9.png
| **`Tabs`** | tab_ | tab_pressed.9.png

**`ICONS`**  
| Asset Type | Prefix | Example
| --- | --- | ---
| **`Icons`** | ic_ | ic_star.png
| **`Launcher icons`** | ic_launcher | ic_launcher_calendar.png
| **`Menu icons and Action Bar icons`** | ic_menu | ic_menu_archive.png
| **`Status bar icons`** | ic_stat_notify | ic_stat_notify_msg.png
| **`Tab icons`** | ic_tab | ic_tab_recent.png
| **`Dialog icons`** | ic_dialog | ic_dialog_info.png

**`LAYOUT FILES: activity_classname.xml vs ClassNameActivity`**  
| Component | Class Name | Layout Name
| --- | --- | ---
| **`Activity`** | UserProfileActivity | activity_user_profile.xml
| **`Fragment`** | UserProfileActiSignUpFragmentvity | fragment_sign_up.xml
| **`Dialog`** | ChangePasswordDialog | dialog_change_password.xml
| **`AdapterView item`** | --- | item_person.xml
| **`Partial layout`** | --- | partial_stats_bar.xml

**`COMPONENT IDS: activity_classname_componentprefix_componentname`**

| Component | Prefix | Example | Description
| --- | --- | ---
| **`Button`** | btn | activity_login_btn_login | Button Login in LoginActivity
| **`EditText`** | et | activity_login_et_username | TextBox Username in LoginActivity
| **`TextView`** | tv | activity_login_et_username | TextView Username in LoginActivity
| **`Checkbox`** | chk | activity_login_chk_gender | Checkbox Gender in LoginActivity
| **`Switch`** | sw | activity_login_sw_gender | Switch Gender in LoginActivity
| **`RadioButton`** | rb | activity_login_rb_years | RadioButton Years in LoginActivity
| **`ToggleButton`** | tb | activity_login_tb_gender | ToggleButton Gender in LoginActivity
| **`ImageButton`** | ib | activity_login_ib_register | Register ImageButton in LoginActivity
| **`ProgressBar`** | pb | activity_home_pb_status | Status ProgressBar in HomeActivity
| **`SeekBar`** | sb | activity_home_sb_status | Status SeekBar in HomeActivity
| **`Spinner`** | spn | activity_login_spn_ages | Spinner Ages in LoginActivity
| **`Menu`** | mnu | activity_home_mnu_left | Left Menu in HomeActivity
| **`ImageView`** | iv | activity_home_mnu_left | Logo ImageView in HomeActivity
| **`ListView`** | lv | activity_home_iv_logo | Logo ImageView in HomeActivity
| **`Menu`** | mnu | activity_home_mnu_left | Left Menu in HomeActivity
| **`GridView`** | gv | activity_home_gv_products | Products GridView in HomeActivity
| **`Expandable List View`** | el | activity_home_el_orders | Orders Expandable List View in HomeActivity
| **`GalleryView`** | gv | activity_home_gv_categories | Categories GalleryView in HomeActivity
| **`WebView`** | wv | activity_home_wv_intro | Intro WebView in HomeActivity
| **`ScrollView`** | sv | activity_home_sv_left | Left ScrollView in HomeActivity
| **`HorizontalScrollView`** | hs | activity_home_hs_top | Top HorizontalScrollView in HomeActivity
| **`TabHost`** | th | activity_home_th_top | Top TabHost in HomeActivity
| **`LinearLayout`** | ll | activity_home_ll_root | Root LinearLayout in HomeActivity
| **`RelativeLayout`** | rl | activity_home_rl_main | Main RelativeLayout in HomeActivity


>**2. CODE LAYOUTS**

- **`Rule 2.1`**  Use spaces for indentation.

Use **`four (4)`** space indents for blocks and never tabs.

```
if (x == 1) {
●●●●x++;
}
```

Use **`eight (8)`** space indents for line wraps, including function calls and assignments.

```
Instrument i =
●●●●●●●●someLongExpression(that, wouldNotFit, on, one, line);
```

- **`Rule 2.2`**   Use standard brace style.

Braces go on the same line as the code before them.  
Braces around the statements are required unless the condition and the body fit on one line.

```
/** CORRECT */
class MyClass {
    int func() {
        if (something) {
            // ...
        } else if (somethingElse) {
            // ...
        } else {
            // ...
        }
    }
}


/** CORRECT */
if (condition) body();


/** INCORRECT */
if (condition)
    body();  // bad!
```
- **`Rule 2.3`**   Avoid star import, only import necessary package.

```
/** CORRECT */
import foo.Bar;


/** INCORRECT */
import foo.*;
```

- **`Rule 2.4`**   Order of import statements.

+ The ordering of import statements is:  
1. Android imports
2. Imports from third parties (com, junit, net, org)
3. java and javax
4. Same project imports
+ The imports should be:
1. Alphabetically ordered within each grouping, with capital letters before lower case letters (e.g. Z before a).
2. There should be a blank line between each major grouping (android, com, junit, net, org, java, javax).

- **`Rule 2.5`**   Order of class members.

1. Constants
2. Fields
3. Constructors
4. Override methods and callbacks (public or private)
5. Public methods
6. Private methods
7. Inner classes or interfaces

- **`Rule 2.6`**   Organizing layout XMLs.

Using the following convention:  
1. One attribute per line, indented by 4 spaces
2. android:id as the first attribute always
3. android:layout_**** attributes at the top
4. style attribute at the bottom
5. Tag closer /> on its own line, to facilitate ordering and adding attributes.
6. When an XML element doesn't have any contents, must use self closing tags.
7. Rather than hard coding android:text, consider using Designtime attributes available for Android Studio.

```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    >

    <TextView
        android:id="@+id/name"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_alignParentRight="true"
        android:text="@string/name"
        style="@style/FancyText"
        />

    <include layout="@layout/reusable_part" />
</LinearLayout>
```

- **`Rule 2.7`**    Code Length limit.

1. Methods should not exceed 40 lines
2. Code lines should not exceed 100 characters (except import statements)
3. Some line-wrapping strategies should be used:
4. Break at operators
5. Assignment Operator Exception
6. Method chain case
7. Long parameters case

```
/** Break at operators */
int longName = anotherVeryLongVariable + anEvenLongerOne - thisRidiculousLongOne
        + theFinalOne;
		
		
/** Assignment Operator Exception */
int longName =
        anotherVeryLongVariable + anEvenLongerOne - thisRidiculousLongOne + theFinalOne;
		
		
/** Method chain case */
Picasso.with(context)
        .load("http://ribot.co.uk/images/sexyjoe.jpg")
        .into(imageView);
		
		
/** Method chain case */
loadPicture(context,
        "http://ribot.co.uk/images/sexyjoe.jpg",
        mImageViewProfilePicture,
        clickListener,
        "Title of the picture");
```