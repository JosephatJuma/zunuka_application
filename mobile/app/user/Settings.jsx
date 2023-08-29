import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../state/auth/themeSlice";
import {
  Card,
  Text,
  Divider,
  RadioButton,
  Surface,
  IconButton,
  Title,
  List,
} from "react-native-paper";
import Header from "../components/Header";
const Settings = () => {
  const theme = useSelector((state) => state.theme.theme);
  const themes = ["default", "dark", "light"];
  const dispatch = useDispatch();
  return (
    <ScrollView>
      <Header title={"Settings"} />
      <Card.Content>
        <Title style={styles.title}>Theme</Title>
      </Card.Content>
      {/* <Surface elevation={1} style={styles.surface}> */}
      {themes.map((t) => {
        return (
          <Surface key={t} elevation={1}>
            <List.Item
              onPress={() => dispatch(toggleTheme(t))}
              title={t + " theme"}
              titleStyle={styles.text}
              description={t}
              right={() => (
                <RadioButton
                  value={theme}
                  status={t === theme ? "checked" : "unchecked"}
                  //onPress={() => dispatch(toggleTheme(t))}
                />
              )}
              left={() => (
                <List.Icon
                  icon={
                    t === "dark"
                      ? "brightness-4"
                      : t === "light"
                      ? "brightness-5"
                      : "flash-auto"
                  }
                />
              )}
              style={{ alignSelf: "center", padding: 10 }}
            />
            <Divider />
          </Surface>
        );
      })}
      {/* </Surface> */}

      <Card.Content>
        <Title style={styles.title}>App Info</Title>
      </Card.Content>
      <Surface style={styles.surface}>
        <List.Item
          onPress={() => dispatch(toggleTheme(t))}
          title={"App version"}
          titleStyle={styles.text}
          right={() => <Text>1.0.0</Text>}
          left={() => <List.Icon icon={"cellphone"} />}
          style={{ alignSelf: "center", padding: 2 }}
        />
        <Divider />
      </Surface>
      <Card.Content>
        <Title style={styles.title}>Account</Title>
      </Card.Content>
      <Surface style={styles.surface}>
        <Card.Content style={styles.card}>
          <Text style={styles.text}>App Version</Text>
          <Text style={styles.text}>1..0.0</Text>
        </Card.Content>
        <Divider />
      </Surface>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  surface: {
    width: "96%",
    borderRadius: 0,
    padding: 4,
    alignSelf: "center",
    margin: 10,
  },
  card: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
  },
  cardContenet: { alignItems: "center", flexDirection: "row" },
  title: { fontWeight: "700", fontSize: 16 },
  text: { textTransform: "capitalize", fontWeight: "bold" },
});

export default Settings;
