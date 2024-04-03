import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      home: MyWidget(),
    ),
  );
}

class MyWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Container(
          padding: EdgeInsets.all(20),
          color: Colors.red,
          child: Image.network("https://i.imgur.com/rDyD5Uj.gif")
        ),
      ),
    );
  }
}

https://www.behance.net/gallery/38144315/Kayak-Sans-Free-Typeface