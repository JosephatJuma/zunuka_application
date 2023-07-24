import React, { useState } from "react";
import {
  ColorInput,
  Group,
  Text,
  Button,
  Dialog,
  Card,
  FileButton,
  Avatar,
} from "@mantine/core";
import { TextInput, Textarea } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { Select, Slider, Box } from "@mantine/core";

import { IconX, IconCheck } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import axios from "axios";
export const AddTripForm = React.memo(() => {
  const api_url = process.env.REACT_APP_API_URL;
  const user = useSelector((state) => state.login.user);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null > null);
  const [date, setDate] = useState(null > "");
  const [endDate, setEndDate] = useState(null > "");
  const [color, setColor] = useState("");
  const [label, setLabel] = useState("");

  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState(50);
  const [labels, setLabels] = useState([
    { value: "School", label: "School" },
    { value: "Church", label: "Church" },
    { value: "Hangout", label: "Hangout" },
    { value: "Work", label: "Work" },
    { value: "Sports", label: "Sports" },
    { value: "Jim and Workout", label: "Jim and Workout" },
  ]);

  const [message, setMessage] = useState("");
  const [success, setSucess] = useState(false);
  const clearMessage = () => {
    setMessage("");
  };
  const submitTrip = async () => {
    clearMessage();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("priority", priority);
    formData.append("description", description);
    formData.append("title", title);
    formData.append("start_date", date);
    formData.append("color", color);
    formData.append("label", label);
    formData.append("status", status);
    formData.append("end_date", endDate);
    try {
      const response = await axios.post(
        `http://192.168.1.5:1000/api/v1/trips/add/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setMessage(response.data.message);
      if (response.data.success === true) {
        setSucess(true);
        setColor("");
        setEndDate("");
        setTitle("");
        setDate("");
        setPriority(50);
        setDescription("");
        setLabel("");
      }
    } catch (error) {
      setMessage(error.message);
      setSucess(false);
    }
  };

  return (
    <>
      {message && (
        <Dialog
          opened={message}
          onClose={clearMessage}
          withCloseButton
          size="lg"
          radius="md"
          shadow="xl"
          sx={{ backgroundColor: success ? "green" : "black", color: "white" }}
          transitionTimingFunction="ease"
        >
          <Group>
            {success ? <IconCheck size="1.1rem" /> : <IconX size="1.1rem" />}
            <Text>{message}</Text>
          </Group>
        </Dialog>
      )}

      <Card sx={{ width: "100%", margin: 20 }} shadow="lg" radius={"lg"}>
        <form>
          <TextInput
            placeholder="Title"
            label="Title:"
            value={title}
            onInput={(e) => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Describe"
            label="Description:"
            value={description}
            onInput={(e) => setDescription(e.target.value)}
          />
          <Group sx={{ width: "100%" }}>
            <DateInput
              value={date}
              onChange={setDate}
              label="Start Date"
              placeholder="2023-20-12"
              disallowInput
            />
            <DateInput
              value={endDate}
              onChange={setEndDate}
              label="End Date"
              placeholder="2023-20-12"
              disallowInput
            />

            <ColorInput
              disallowInput
              label="Select color"
              format="hex"
              swatches={[
                "#25262b",
                "#868e96",
                "#fa5252",
                "#e64980",
                "#be4bdb",
                "#7950f2",
                "#4c6ef5",
                "#228be6",
                "#15aabf",
                "#12b886",
                "#40c057",
                "#82c91e",
                "#fab005",
                "#fd7e14",
              ]}
              value={color}
              onChange={setColor}
            />
          </Group>
          <Group>
            <Select
              label="Status"
              placeholder="Select Initial Status"
              defaultChecke="Not Started"
              data={[
                { value: "Not Started", label: "Not Started" },
                { value: "In Progress", label: "In Progress" },
                { value: "Completed", label: "Completed" },
              ]}
              value={status}
              onChange={setStatus}
            />
            <Select
              label="Select Categories"
              data={labels}
              placeholder="Select Labels"
              nothingFound="Nothing found"
              searchable
              creatable
              getCreateLabel={(query) => `+ Create ${query}`}
              onCreate={(query) => {
                const item = { value: query, label: query };
                setLabels((current) => [...current, item]);
                return item;
              }}
              value={label}
              onChange={setLabel}
            />
          </Group>
          <Group position="center">
            {image && <Avatar src={URL.createObjectURL(image)} />}
            <FileButton onChange={setImage} accept="image/png,image/jpeg">
              {(props) => (
                <Button {...props}>
                  {image ? "Change Image" : "Upload image"}
                </Button>
              )}
            </FileButton>
          </Group>
          <Box sx={{ margin: "auto" }}>
            <Text mt="xl" size="xl" fw={"bold"}>
              {priority >= 80
                ? "Very High"
                : priority >= 60
                ? "High"
                : priority > 40
                ? "Low"
                : "Very Low"}{" "}
              Priority
            </Text>
            <Slider
              value={priority}
              onChange={setPriority}
              thumbSize={15}
              color="#800080"
            />
          </Box>
          <Button
            sx={{ backgroundColor: "#800080", width: "100%", marginTop: 20 }}
            onClick={submitTrip}
          >
            Save Trip
          </Button>
        </form>
      </Card>
    </>
  );
});
