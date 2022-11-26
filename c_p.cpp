#include <iostream>
using namespace std;

    void add(int x, int y)
    {
        cout << x+y << endl;
    }

class person {
    public:
    string name;
    int age;
};

int main()
{
    int a=5;
    int b=7;
    add(a,b);

    person yasir;
    yasir.name="Yasir";
    yasir.age=25;
    cout << "Name: " << yasir.name << "\n Age: " << yasir.age << endl;


    return 0;
}