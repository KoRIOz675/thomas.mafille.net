import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { client } from '../sanityClient';

interface SettingsContextType {
  resumeUrl: string | null;
}

const SettingsContext = createContext<SettingsContextType>({ resumeUrl: null });

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [resumeUrl, setResumeUrl] = useState<string | null>(null);

  useEffect(() => {
    const query = `*[_type == "siteSettings"][0]{"resumeUrl": resumeFile.asset->url}`;

    client
      .fetch<{ resumeUrl: string }>(query)
      .then((data) => {
        if (data) {
          setResumeUrl(data.resumeUrl);
        }
      })
      .catch(console.error);
  }, []);

  return <SettingsContext.Provider value={{ resumeUrl }}>{children}</SettingsContext.Provider>;
};
