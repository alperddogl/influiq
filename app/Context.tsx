import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const defaultApikeyContext = {
  apikey: "",
  setApikey: (apikey: string) => {},
};

export const ApikeyContext = React.createContext(defaultApikeyContext);

export const ApikeyProvider = ({ children }) => {
  const [apikey, setApikey] = useState("");

  useEffect(() => {
    const loadApikey = async () => {
      const savedApikey = await AsyncStorage.getItem("apikey");
      if (savedApikey) {
        setApikey(savedApikey);
      }
    };

    loadApikey();
  }, []);

  useEffect(() => {
    const saveApikey = async () => {
      await AsyncStorage.setItem("apikey", apikey);
      console.log(`Saved apikey: ${apikey}`);
    };

    saveApikey();
  }, [apikey]);

  return (
    <ApikeyContext.Provider value={{ apikey, setApikey }}>
      {children}
    </ApikeyContext.Provider>
  );
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const defaultCategoryContext = {
  category: "",
  setCategory: (category: string) => {},
};

export const CategoryContext = React.createContext(defaultCategoryContext);

export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState("");

  useEffect(() => {
    const loadCategory = async () => {
      const savedCategory = await AsyncStorage.getItem("category");
      if (savedCategory) {
        setCategory(savedCategory);
      }
    };

    loadCategory();
  }, []);

  useEffect(() => {
    const saveCategory = async () => {
      await AsyncStorage.setItem("category", category);
      console.log(`Saved category: ${category}`);
    };

    saveCategory();
  }, [category]);

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const defaultTopicContext = {
  topic: "",
  setTopic: (topic: string) => {},
};

export const TopicContext = React.createContext(defaultTopicContext);

export const TopicProvider = ({ children }) => {
  const [topic, setTopic] = useState("");

  useEffect(() => {
    const loadTopic = async () => {
      const savedTopic = await AsyncStorage.getItem("topic");
      if (savedTopic) {
        setTopic(savedTopic);
      }
    };

    loadTopic();
  }, []);

  useEffect(() => {
    const saveTopic = async () => {
      await AsyncStorage.setItem("topic", topic);
      console.log(`Saved topic: ${topic}`);
    };

    saveTopic();
  }, [topic]);

  return (
    <TopicContext.Provider value={{ topic, setTopic }}>
      {children}
    </TopicContext.Provider>
  );
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const defaultKeysContext = {
  keys: [],
  setKeys: (keys: string[]) => {},
};

export const KeysContext = React.createContext(defaultKeysContext);

export const KeysProvider = ({ children }) => {
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    const loadKeys = async () => {
      const savedKeys = await AsyncStorage.getItem("keys");
      if (savedKeys) {
        setKeys(JSON.parse(savedKeys));
      }
    };

    loadKeys();
  }, []);

  useEffect(() => {
    const saveKeys = async () => {
      await AsyncStorage.setItem("keys", JSON.stringify(keys));
      console.log(`Saved keys: ${keys}`);
    };

    saveKeys();
  }, [keys]);

  return (
    <KeysContext.Provider value={{ keys, setKeys }}>
      {children}
    </KeysContext.Provider>
  );
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const defaultRandomnessContext = {
  randomness: 200,
  setRandomness: (randomness: number) => {},
};

export const RandomnessContext = React.createContext(defaultRandomnessContext);

export const RandomnessProvider = ({ children }) => {
  const [randomness, setRandomness] = useState(
    defaultRandomnessContext.randomness,
  );

  useEffect(() => {
    const loadRandomness = async () => {
      const savedRandomness = await AsyncStorage.getItem("randomness");
      if (savedRandomness) {
        setRandomness(parseInt(savedRandomness, 10));
      }
    };

    loadRandomness();
  }, []);

  useEffect(() => {
    const saveRandomness = async () => {
      await AsyncStorage.setItem("randomness", randomness.toString());
      console.log(`Saved randomness: ${randomness}`);
    };

    saveRandomness();
  }, [randomness]);

  return (
    <RandomnessContext.Provider value={{ randomness, setRandomness }}>
      {children}
    </RandomnessContext.Provider>
  );
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const defaultMaxTokensContext = {
  maxtokens: 200,
  setMaxTokens: (maxtokens: number) => {},
};

export const MaxTokensContext = React.createContext(defaultMaxTokensContext);

export const MaxTokensProvider = ({ children }) => {
  const [maxtokens, setMaxTokens] = useState(defaultMaxTokensContext.maxtokens);

  useEffect(() => {
    const loadMaxTokens = async () => {
      const savedMaxTokens = await AsyncStorage.getItem("maxtokens");
      if (savedMaxTokens) {
        setMaxTokens(parseInt(savedMaxTokens, 10));
      }
    };

    loadMaxTokens();
  }, []);

  useEffect(() => {
    const saveMaxTokens = async () => {
      await AsyncStorage.setItem("maxtokens", maxtokens.toString());
      console.log(`Saved maxtokens: ${maxtokens}`);
    };

    saveMaxTokens();
  }, [maxtokens]);

  return (
    <MaxTokensContext.Provider value={{ maxtokens, setMaxTokens }}>
      {children}
    </MaxTokensContext.Provider>
  );
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const defaultCommentContext = {
  comment: "",
  setComment: (comment: string) => {},
};

export const CommentContext = React.createContext(defaultCommentContext);

export const CommentProvider = ({ children }) => {
  const [comment, setComment] = useState("");

  useEffect(() => {
    const loadComment = async () => {
      const savedComment = await AsyncStorage.getItem("comment");
      if (savedComment) {
        setComment(savedComment);
      }
    };

    loadComment();
  }, []);

  useEffect(() => {
    const saveComment = async () => {
      await AsyncStorage.setItem("comment", comment);
      console.log(`Saved comment: ${comment}`);
    };

    saveComment();
  }, [comment]);

  return (
    <CommentContext.Provider value={{ comment, setComment }}>
      {children}
    </CommentContext.Provider>
  );
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const defaultScriptContext = {
  script: "",
  setScript: (script: string) => {},
};

export const ScriptContext = React.createContext(defaultScriptContext);

export const ScriptProvider = ({ children }) => {
  const [script, setScript] = useState("");

  useEffect(() => {
    const loadScript = async () => {
      const savedScript = await AsyncStorage.getItem("script");
      if (savedScript) {
        setScript(savedScript);
      }
    };

    loadScript();
  }, []);

  useEffect(() => {
    const saveScript = async () => {
      await AsyncStorage.setItem("script", script);
      console.log(`Saved script: ${script}`);
    };

    saveScript();
  }, [script]);

  return (
    <ScriptContext.Provider value={{ script, setScript }}>
      {children}
    </ScriptContext.Provider>
  );
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const defaultScriptsContext = {
  scripts: [],
  setScripts: (scripts: string[]) => {},
};

export const ScriptsContext = React.createContext(defaultScriptsContext);

export const ScriptsProvider = ({ children }) => {
  const [scripts, setScripts] = useState([]);

  useEffect(() => {
    const loadScripts = async () => {
      const savedScripts = await AsyncStorage.getItem("scripts");
      if (savedScripts) {
        setScripts(JSON.parse(savedScripts));
      }
    };

    loadScripts();
  }, []);

  useEffect(() => {
    const saveScripts = async () => {
      await AsyncStorage.setItem("scripts", JSON.stringify(scripts));
      console.log(`Saved scripts: ${scripts}`);
    };

    saveScripts();
  }, [scripts]);

  return (
    <ScriptsContext.Provider value={{ scripts, setScripts }}>
      {children}
    </ScriptsContext.Provider>
  );
};
